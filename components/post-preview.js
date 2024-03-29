import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  company,
  coverImage,
  date,
  position,
  slug,
}) {
  return (
    <div>
      <div className="mb-1">
        <CoverImage
          slug={slug}
          title={position}
          src={coverImage}
          height={145}
          width={230}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/experiences/${slug}`} href="/experiences/[slug]">
          <a className="hover:underline">{company}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{position}</p>
    </div>
  )
}
