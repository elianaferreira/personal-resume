export default function Box({ title, date, link }) {
  return (
    <div className="box-border p-4 border-2 rounded-xl">
      <p className="text-lg leading-relaxed mb-4">{title}</p>
      <p className="text-sm font-medium text-gray-400">{date}</p>
      <p className="text-medium leading-relaxed">
      <a
        target="_blank"
        href={link}
        className="underline hover:text-success duration-200 transition-colors"
      >
        Certificate
      </a>
      </p>
    </div>
  )
}
