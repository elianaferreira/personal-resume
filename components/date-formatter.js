import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  return <div className="text-sm font-medium text-gray-400">{dateString}</div>
}
