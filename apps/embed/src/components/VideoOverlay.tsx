import { LENSTUBE_URL } from '@utils/constants'
import getProfilePicture from '@utils/functions/getProfilePicture'
import Link from 'next/link'
import { FC } from 'react'
import { LenstubePublication } from 'src/types/local'

type Props = {
  video: LenstubePublication
}

const VideoOverlay: FC<Props> = ({ video }) => {
  return (
    <div className="absolute top-0 z-10 w-full text-white">
      <div className="flex items-center justify-between p-2 space-x-6 bg-gradient-to-b to-transparent from-black/90">
        <div className="flex items-center flex-1">
          <Link
            href={`${LENSTUBE_URL}/${video?.profile?.handle}`}
            className="flex-none mr-3 cursor-pointer"
            target="_blank"
          >
            <img
              src={getProfilePicture(video?.profile)}
              className="w-8 h-8 rounded-full"
              draggable={false}
              alt="channel picture"
            />
          </Link>
          <div className="flex flex-col">
            <Link
              href={`${LENSTUBE_URL}/watch/${video?.id}`}
              className="break-words line-clamp-1"
              target="_blank"
            >
              <h1 className="font-semibold">{video?.metadata.name}</h1>
            </Link>
            <Link
              href={`${LENSTUBE_URL}/${video?.profile.handle}`}
              className="leading-3 break-words line-clamp-1"
              target="_blank"
            >
              <span className="text-xs font-medium opacity-90">
                {video?.profile.handle}
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-self-end">
          <Link
            title="Watch on LensTube"
            className="flex items-center space-x-1.5"
            href={`${LENSTUBE_URL}/watch/${video?.id}`}
            target="_blank"
          >
            <img
              src="/lenstube.png"
              draggable={false}
              className="w-8 h-8 ml-0.5"
              alt="lenstube"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

VideoOverlay.displayName = 'VideoOverlay'

export default VideoOverlay