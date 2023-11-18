// TradingViewWidget.jsx

import React, { useEffect, useRef, useState } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
    const onLoadScriptRef = useRef();
    const parentRef = useRef(null);
    const [childHeight, setChildHeight] = useState(0);

    useEffect(
        () => {

            if (parentRef.current) {
                // Get the height of the parent container
                const parentHeight = parentRef.current.clientHeight;

                // Set the height of the child element
                const calculatedChildHeight = parentHeight / 2; // Modify this calculation as needed
                setChildHeight(calculatedChildHeight);
            }

            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_a4d9a') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        autosize: true,
                        symbol: "PEPEWETH",
                        interval: "1",
                        timezone: "Etc/UTC",
                        theme: "dark",
                        style: "1",
                        locale: "en",
                        enable_publishing: false,
                        withdateranges: true,
                        hide_side_toolbar: false,
                        allow_symbol_change: false,
                        container_id: "tradingview_a4d9a"
                    });
                }
            }
        },
        []
    );

    return (
        <div className="w-full h-full">
            <div className='tradingview-widget-container w-full h-full'>
                <div id='tradingview_a4d9a' className="w-full h-full" />
            </div>
        </div>
    );
}
