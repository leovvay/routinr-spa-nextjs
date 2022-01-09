export interface Widget {
  open: () => void;
  close: (obj: { quiet: boolean }) => void;
  update: (obj: Option) => void;
  hide: () => void;
  destroy: () => void;
  show: () => void;
  minimize: () => void;
  isShowing: () => boolean;
  isMinimized: () => boolean;
}

export interface FileInfo {
  id: string;
  batchId: string;
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: 'image' | 'video' | 'audio' | 'raw';
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  original_filename: string;
  api_key: string;
  path: string;
  thumbnail_url: string;
}

export interface CloudinaryResult {
  event: 'success';
  info: FileInfo;
}

export type CloudinaryResultCallback = (
  error: any,
  result: CloudinaryResult
) => void;

export interface Cloudinary {
  createUploadWidget: (config: Option, cb: CloudinaryResultCallback) => Widget;
}

export interface Option {
  cloudName: string;
  uploadPreset?: string;
  folder?: string;
  cropping?: boolean;
  uploadSignature?: any;
  sources?: string[];
  googleApiKey?: string;
  searchBySites?: string[];
  searchByRights?: boolean;
  dropboxAppKey?: string;
  facebookAppId?: string;
  instagramClientId?: string;
  showAdvancedOptions?: boolean;
  styles?: any;
  fonts?: any;
  text?: any;
  encryption?: any;
  language?: string;
  clientAllowedFormats?: string[];
  maxFileSize?: number;
  maxImageFileSize?: number;
  maxVideoFileSize?: number;
  maxRawFileSize?: number;
  maxImageWidth?: number;
  maxImageHeight?: number;
  preBatch?: (cb: (obj?: { cancel: boolean }) => void, data: any) => void;
  prepareUploadParams?: (
    cb: (obj?: { cancel: boolean }) => void,
    params: any
  ) => void;
  getTags?: (cb: (obj?: { cancel: boolean }) => void, prefix: any) => void;
  getUploadPresets?: (cb: (presets?: string[]) => void) => void;
  [prop: string]: any;
}

// The actual analytics.js object
interface AnalyticsJS {
  /* Use a plugin */
  _writeKey: string;
  SNIPPET_VERSION: string;
  use(plugin: (analytics: AnalyticsJS) => void): this;

  /* Initialize with the given integration `settings` and `options`. */
  init(settings?: IntegrationsSettings, options?: InitOptions): this;

  /* Define a new integration */
  addIntegration(integration: (options: any) => void): this;

  /*  Set the user's `id`. */
  setAnonymousId(id: string): this;

  /* Configure Segment with write key */
  load(writeKey: string): void;

  /* Configure Segment with write key & integration management.
     The load method can also be modified to take a second argument,
     an object with an integrations dictionary, which used to load
     only the integrations that are marked as enabled with the boolean value true.
     works in version 4.1.0 or higher */
  load(writeKey: string, options?: SegmentOpts): void;

  /* The identify method is how you tie one of your users and their actions
     to a recognizable userId and traits. */
  identify(
    userId: string,
    traits?: Record<string, unknown>,
    options?: SegmentOpts,
    callback?: () => void
  ): void;
  identify(
    userId: string,
    traits: Record<string, unknown>,
    callback?: () => void
  ): void;
  identify(userId: string, callback?: () => void): void;
  identify(
    traits?: Record<string, unknown>,
    options?: SegmentOpts,
    callback?: () => void
  ): void;
  identify(traits?: Record<string, unknown>, callback?: () => void): void;
  identify(callback: () => void): void;

  /* The track method lets you record any actions your users perform. */
  track(
    event: string,
    properties?: Record<string, unknown>,
    options?: SegmentOpts,
    callback?: () => void
  ): void;
  track(
    event: string,
    properties?: Record<string, unknown>,
    callback?: () => void
  ): void;
  track(event: string, callback?: () => void): void;

  /* The page method lets you record page views on your website, along with
     optional extra information about the page being viewed. */
  page(
    category?: string,
    name?: string,
    properties?: Record<string, unknown>,
    options?: SegmentOpts,
    callback?: () => void
  ): void;
  page(
    name?: string,
    properties?: Record<string, unknown>,
    options?: SegmentOpts,
    callback?: () => void
  ): void;
  page(
    name?: string,
    properties?: Record<string, unknown>,
    callback?: () => void
  ): void;
  page(name?: string, callback?: () => void): void;
  page(
    properties?: Record<string, unknown>,
    options?: SegmentOpts,
    callback?: () => void
  ): void;
  page(callback?: () => void): void;

  /* The group method associates an individual user with a group. The group
     can a company, organization, account, project, team or any other name
     you came up with for the same concept. */
  group(
    groupId: string,
    traits?: Record<string, unknown>,
    options?: SegmentOpts,
    callback?: () => void
  ): void;
  group(
    groupId: string,
    traits?: Record<string, unknown>,
    callback?: () => void
  ): void;
  group(groupId: string, callback?: () => void): void;

  /* The alias method combines two previously unassociated user identities.
     This comes in handy if the same user visits from two different devices
     and you want to combine their history.
     Some providers also don’t alias automatically for you when an anonymous
     user signs up (like Mixpanel), so you need to call alias manually right
     after sign up with their brand new userId. */
  alias(
    userId: string,
    previousId?: string,
    options?: SegmentOpts,
    callback?: () => void
  ): void;
  alias(userId: string, previousId?: string, callback?: () => void): void;
  alias(userId: string, callback?: () => void): void;
  alias(userId: string, options?: SegmentOpts, callback?: () => void): void;

  /* trackLink is a helper that binds a track call to whenever a link is
     clicked. Usually the page would change before you could call track, but
     with trackLink a small timeout is inserted to give the track call enough
     time to fire. */
  trackLink(
    elements: JQuery | Element[] | Element,
    event: string | { (elm: Element): string },
    properties?:
      | Record<string, unknown>
      | { (elm: Element): Record<string, unknown> }
  ): void;

  /* trackForm is a helper that binds a track call to a form submission.
     Usually the page would change before you could call track, but with
     trackForm a small timeout is inserted to give the track call enough
     time to fire. */
  trackForm(
    elements: JQuery | Element[] | Element,
    event: string | { (elm: Element): string },
    properties?:
      | Record<string, unknown>
      | { (elm: Element): Record<string, unknown> }
  ): void;

  /* The ready method allows you to pass in a callback that will be called as
     soon as all of your enabled integrations have loaded. It’s like jQuery’s
     ready method, except for integrations. */
  ready(callback: () => void): void;

  /* If you need to clear the user and group id and traits we’ve added a
     reset function that is most commonly used when your identified users
     logout of your application. */
  reset(): void;

  /* Once Analytics.js loaded, you can retrieve information about the
     currently identified user or group like their id and traits. */
  user(): {
    id(newId?: string | null): string | null | undefined;
    logout(): void;
    reset(): void;
    anonymousId(newId?: string): string;
    traits(newTraits?: Record<string, unknown>): void;
  };

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  group(): {
    id(): string;
    traits(newTraits?: Record<string, unknown>): void;
  };

  /* Analytics.js has a debug mode that logs helpful messages to the
     console. */
  debug(state?: boolean): void;

  /* The global analytics Record<string, unknown> emits events whenever you call alias, group,
     identify, track or page. That way you can listen to those events and run
     your own custom code. */
  on(
    event: string,
    callback: {
      (
        event: string,
        properties: Record<string, unknown>,
        options: SegmentOpts
      ): void;
    }
  ): void;

  /* You can extend the length (in milliseconds) of the method callbacks and
     helpers */
  timeout(milliseconds: number): void;
}

declare let analytics: AnalyticsJS;

declare global {
  interface Window {
    cloudinary: Cloudinary;
    analytics: AnalyticsJS;
  }
}
