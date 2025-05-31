import { Notification } from './Notification';

interface NotificationCardProps {
  data: Notification;
  remarkText: string;
  setRemarkText: (text: string) => void;
  onRemark: () => void;
  onDelete: () => void;
}

export default function NotificationCard({
  data,
  remarkText,
  setRemarkText,
  onRemark,
  onDelete,
}: NotificationCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-4 border border-gray-100 hover:shadow-lg transition-all">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
          <p className="text-sm text-gray-500">{data.email}</p>
        </div>
        <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
          {data.type}
        </span>
      </div>

      <p className="text-gray-700 text-sm mb-4 whitespace-pre-wrap">{data.message}</p>

      <div className="mb-4">
        <textarea
          placeholder="Write your remark here..."
          value={remarkText}
          onChange={(e) => setRemarkText(e.target.value)}
          className="w-full p-2 text-sm border rounded-md focus:ring focus:outline-none"
        />
        <button
          onClick={onRemark}
          className="mt-2 px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          OK
        </button>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onDelete}
          className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
