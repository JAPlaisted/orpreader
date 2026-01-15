'use client';

export default function Hero({
  bgType = 'image',                 
  imageUrl = '',
  imageAlt = '',
  videoSrc = '',                    
  videoPoster = '',                
  overlay = true,
  overlayOpacity = 0.35,             
  overline = '',
  heading = '',
  body = '',
  button = null,                     
  align = 'center',                   
}) {
  const alignClasses =
    align === 'left'
      ? 'items-center justify-start text-left'
      : 'items-center justify-center text-center';

  return (
    <section className="hero relative w-full min-h-screen overflow-hidden">

      <div className="hero__media absolute inset-0 z-0">
        {bgType === 'video' && videoSrc ? (
          <video
            className="w-full h-full object-cover"
            src={videoSrc}
            poster={videoPoster || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Background video"
          />
        ) : (
          imageUrl && (
            <img
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={imageAlt || ''}
            />
          )
        )}
        {overlay && (
          <div
            className="absolute inset-0"
            style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
            aria-hidden="true"
          />
        )}
      </div>

      <div className={`hero__content relative flex ${alignClasses} px-6`}>
        <div className="container max-w-5xl py-20">
          {overline && <div className="eyebrow text-light">{overline}</div>}
          {heading && <h1 className="heading--xl mb-2 text-white">{heading}</h1>}
          {body && <p className="body--l mb-6 text-white">{body}</p>}

          {button?.label && (
            <a href={button.link || '#'} className={`button ${button.size || 'btn--l'} ${button.theme || 'btn-primary'}`}>
              {button.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
