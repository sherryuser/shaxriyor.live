import * as React from 'react';
import clsx from 'clsx';

type InstagramEmbedProps = {
    className?: string;
    url: string;
    aspectRatio?: string; // Aspect ratio for responsive design (e.g., "56.25%" for 16:9)
    containerTagName?: React.ElementType;
};

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({
                                                           className,
                                                           url,
                                                           aspectRatio = '100%', // Default to square, adjust as needed
                                                           containerTagName = 'div',
                                                       }) => {
    const isReel = url.includes('/reel/');
    const embedUrl = isReel
        ? `https://www.instagram.com/reel/${url.split('/reel/')[1].split('/')[0]}/embed/`
        : `https://www.instagram.com/p/${url.split('/p/')[1].split('/')[0]}/embed/`;
    const Container = containerTagName;

    const wrapperStyle: React.CSSProperties = {
        position: 'relative',
        paddingBottom: aspectRatio,
        height: 0,
    };

    const iframeStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0, // If you want a unit like 'px', use '0px'
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
    };


    return (
        <Container className={clsx(className)}>
            <div style={wrapperStyle}>
                <iframe
                    src={embedUrl}
                    style={iframeStyle}
                ></iframe>
            </div>
        </Container>
    );
};

export default InstagramEmbed;
