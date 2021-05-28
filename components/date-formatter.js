import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  return <div class="text-sm font-medium text-gray-400">{dateString}</div>
}
