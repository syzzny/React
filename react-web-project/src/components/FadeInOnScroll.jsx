import { useEffect, useRef } from "react";

function FadeInOnScroll() {
    const fadeRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (fadeRef.current) {
                const { top, bottom } = fadeRef.current.getBoundingClientRect();
                const { innerHeight } = window;

                if (top < innerHeight && bottom > 0) {
                    fadeRef.current.style.opacity = 1;
                    fadeRef.current.style.transform = "translateY(0)";
                } else {
                    fadeRef.current.style.opacity = 0;
                    fadeRef.current.style.transform = "translateY(20px)";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={fadeRef} style={{ opacity: 0, transform: "translateY(20px)" }}>
        </div>
    );
}
