import * as React from 'react';
import clsx from 'clsx';

type CodePenEmbedProps = {
    className?: string;
    user: string; // The username of the pen owner
    hash: string; // The unique hash of the pen
    height?: string; // The height of the iframe, can be in 'px' or '%' or other CSS units
    themeId?: string; // Optional theme ID for CodePen
    defaultTab?: string; // The default tab to display ('html', 'css', 'js', 'result')
    editable?: boolean; // If set to true, allows the pen to be edited by users
};

const CodePenEmbed: React.FC<CodePenEmbedProps> = ({
                                                       className,
                                                       user,
                                                       hash,
                                                       height = '400px', // default height of 400px, adjust as needed
                                                       themeId = 'light',
                                                       defaultTab = 'result',
                                                       editable = false,
                                                   }) => {
    const embedUrl = `https://codepen.io/${user}/embed/preview/${hash}?height=${height}&theme-id=${themeId}&default-tab=${defaultTab}&editable=${editable}`;

    return (
        <div className={clsx('codepen-embed', className)} style={{ height, overflow: 'hidden' }}>
            <iframe
                src={embedUrl}
                style={{ width: '100%', height: '100%' }}
                frameBorder="no"
                allowFullScreen={true}
            >
            </iframe>
        </div>
    );
};

export default CodePenEmbed;
