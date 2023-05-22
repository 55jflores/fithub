import { useEffect, useRef } from 'react';

interface VideoEmbedProps {
  src: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const iframeWindow = iframe?.contentWindow;

    const enableScroll = () => {
      if (iframeWindow && iframeWindow.document && iframeWindow.document.documentElement) {
        iframeWindow.document.documentElement.style.overflow = 'auto';
      }
    };

    const disableScroll = () => {
      if (iframeWindow && iframeWindow.document && iframeWindow.document.documentElement) {
        iframeWindow.document.documentElement.style.overflow = 'hidden';
      }
    };

    // Enable scrolling when the iframe is loaded
    iframe?.addEventListener('load', enableScroll);

    // Disable scrolling when the iframe is unloaded
    return () => {
      iframe?.removeEventListener('load', enableScroll);
      disableScroll();
    };
  }, [src]);

  return (
    <iframe
      ref={iframeRef}
      className='w-full aspect-video'
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

const YourComponent: React.FC = () => (
  <div className='flex flex-col items-center'>
    <p>Leg Extensions</p>
    <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
    <VideoEmbed src="https://www.youtube.com/embed/8Jqof7z3QYM" />

    <p>Leg Curls</p>
    <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
    <VideoEmbed src="https://www.youtube.com/embed/fK0uZ3KRZRI" />

    <p>Smith Machine Bulgarian Split Squats</p>
    <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
    <VideoEmbed src="https://www.youtube.com/embed/oLi2QcD0B3M" />
    
    <p>Smith Machine Hip Thrust</p>
    <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
    <VideoEmbed src="https://www.youtube.com/embed/s6u3ESE4kMg" />
    
    <p>Smith Machine Hack Squat</p>
    <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
    <VideoEmbed src="https://www.youtube.com/embed/i2LRBez5xZY" />
    
    <p>Cable Pullthrough</p>
    <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
    <VideoEmbed src="https://www.youtube.com/embed/4oZ_0_bQcOg" />

  </div>
);

export default YourComponent;