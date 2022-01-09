export default function getSocialAuthLink(
  provider: 'facebook' | 'google',
  redirectTarget?: string | null
) {
  const base = `${process.env.NEXT_PUBLIC_LEGACY_API_HOST}/api/v1/auth/${provider}?auth_origin_url=${process.env.NEXT_PUBLIC_HOST}/login`;

  return redirectTarget ? `${base}&redirect_target=${redirectTarget}` : base;
}
