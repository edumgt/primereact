import React, { useState } from 'react';
import { Button } from '../../../lib/button/Button';
import { useUnmountEffect } from '../../../lib/hooks/Hooks';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function BasicDoc(props) {
    const [hidden, setHidden] = useState(false);

    const DynamicBox = () => {
        useUnmountEffect(() => {
            // eslint-disable-next-line no-console
            console.log('Unmounted');
        });

        return <div className="w-8rem h-8rem border-round bg-primary border-1 border-primary mb-3 flex justify-content-center align-items-center">Mounted</div>;
    };

    const code = {
        basic: `
useUnmountEffect(() => {
    console.log('Unmounted');
});
        `,
        javascript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { useUnmountEffect, useMountEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const [hidden, setHidden] = useState(false);

    const DynamicBox = () => {
        useUnmountEffect(() => {
            // eslint-disable-next-line no-console
            console.log('Unmounted');
        });
    
        return <div className="w-8rem h-8rem border-round bg-primary border-1 border-primary mb-3 flex justify-content-center align-items-center">Mounted</div>;
    };

    return (
        <div className="card flex flex-column align-items-center">
            {!hidden ? <DynamicBox /> : <div className="w-8rem h-8rem border-round surface-card border-1 surface-border border-dashed mb-3 flex justify-content-center align-items-center">Unmounted</div>}
            <Button label={hidden ? 'Mount' : 'Unmount'} onClick={() => setHidden(() => !hidden)} className="p-button-outlined w-10rem" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { useUnmountEffect, useMountEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const [hidden, setHidden] = useState<boolean>(false);

    const DynamicBox = () => {
        useUnmountEffect(() => {
            // eslint-disable-next-line no-console
            console.log('Unmounted');
        });
    
        return <div className="w-8rem h-8rem border-round bg-primary border-1 border-primary mb-3 flex justify-content-center align-items-center">Mounted</div>;
    };

    return (
        <div className="card flex flex-column align-items-center">
            {!hidden ? <DynamicBox /> : <div className="w-8rem h-8rem border-round surface-card border-1 surface-border border-dashed mb-3 flex justify-content-center align-items-center">Unmounted</div>}
            <Button label={hidden ? 'Mount' : 'Unmount'} onClick={() => setHidden(() => !hidden)} className="p-button-outlined w-10rem" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A messages is displayed at browser console when the box is unmounted.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                {!hidden ? <DynamicBox /> : <div className="w-8rem h-8rem border-round surface-card border-1 surface-border border-dashed mb-3 flex justify-content-center align-items-center">Unmounted</div>}
                <Button label={hidden ? 'Mount' : 'Unmount'} onClick={() => setHidden(() => !hidden)} className="p-button-outlined w-10rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}