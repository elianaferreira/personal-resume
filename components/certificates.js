import Box from './box'

export default function Certificates({ certificates }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-32 gap-y-10 mb-10">
        {certificates.map((cert) => (
          <Box
            title={cert.title}
            date={cert.date}
            link={cert.link}
          />
        ))}
      </div>
    </section>
  )
}
