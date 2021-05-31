import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ company, coverImage, date, position }) {
  return (
    <>
      <PostTitle>{position} at {company}</PostTitle>
      <div className="hidden md:block md:mb-12">
      </div>
      <div className="mb-8 md:mb-8 w-3/5 place-self-center mx-auto">
        <CoverImage title={company} src={coverImage} height={100} width={153} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
