const URLTypeMap = {
  user: 'profile',
  routine: 'routines',
  post: 'post',
};

interface ShareURLS {
  fbShareUrl: string;
  twitterShareUrl: string;
  linkedInShareUrl: string;
}

export default function getShareURL(
  title: string,
  slug: string,
  type: 'user' | 'routine' | 'post'
): ShareURLS {
  const shareUrl = encodeURIComponent(
    `${process.env.NEXT_PUBLIC_HOST}/${URLTypeMap[type]}/${slug}`
  );

  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/share?text=${title}&url=${shareUrl}&via=Routinr`;
  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`;

  return {
    fbShareUrl,
    twitterShareUrl,
    linkedInShareUrl,
  };
}
