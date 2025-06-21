'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { customToast } from '@/utils/toast';
import NotificationCard from './NotificationCard';
import api from '@/utils/api';

export interface Notification {
  _id: string;
  name: string;
  email: string;
  type: string;
  message: string;
}

export default function NotificationModule() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [remarkText, setRemarkText] = useState('');

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await api.get('/notifications', { withCredentials: true });
      console.log(res.data)
      setNotifications(res.data.notifications);
    } catch {
      customToast('Failed to fetch notifications', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    console.log('on delete is call' ,id)
    try {
      await api.delete(`/notifications/${id}/delete`, {});
      customToast('Notification deleted', 'success');
      fetchNotifications();
    } catch {
      customToast('Delete failed', 'error');
    }
  };

  const handleRemarkSubmit = async (id: string ,remarkText:string) => {
    console.log("remark :" , id, remarkText)
    try {
      await api.post(`/notifications/${id}/remark`, { remarkText });
      customToast('Remark submitted', 'success');
      setRemarkText('');
      fetchNotifications();
    } catch {
      customToast('Remark failed', 'error');
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <NotificationCard
                key={n._id}
                data={n}
                setRemarkText={setRemarkText}
                remarkText={remarkText}
                onRemark={()=>{
                  handleRemarkSubmit(n._id , remarkText )
                }}
                onDelete={() => handleDelete(n._id)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-6">No notifications found.</p>
          )}
        </div>
      )}
    </div>
  );
}
