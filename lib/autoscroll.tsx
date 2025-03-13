import { useEffect } from "react";


export default function AutoScroll() {
  let scrollTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);

      const sections: HTMLDivElement[] = [];
      document.querySelectorAll(".autoscroll").forEach((section) => {
        sections.push(section as HTMLDivElement)
      })

      scrollTimeout = setTimeout(() => {
        checkAndScroll(sections);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkAndScroll = (sections: HTMLDivElement[]) => {
    const viewportHeight = window.innerHeight;
    let visibleSection = false;
    let closestSection: HTMLDivElement | null = null;
    let closestDistance = Infinity;

    sections.forEach((section) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < viewportHeight) {
          visibleSection = true;
        }
        const distance = Math.abs(rect.top);
        if (distance < closestDistance) {
          console.log(distance, closestDistance)
          closestDistance = distance;
          closestSection = section;
        }
      }
    });

    if (visibleSection && closestSection) {
      // closestSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return <></>;
}

export function AutoScroll_() {
  useEffect(() => {
    if (!window) return;

    const sections: HTMLDivElement[] = [];
    document.querySelectorAll(".autoscroll").forEach((section) => {
      sections.push(section as HTMLDivElement)
    })
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          console.log("requestAnimationFrame")
          scrollToNearestSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    const scrollToNearestSection = () => {
      const scrollPosition = window.scrollY;
      // let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((element) => {
        const section = element as HTMLDivElement;
        if (section) {
          const offset = section.offsetTop;
          const distance = Math.abs(scrollPosition - offset);
          // console.log("distance", distance, "minDistance", minDistance)

          if (distance < minDistance) {
            minDistance = distance;
            // closestSection = element;
          }
        }
      });

      // closestSection?.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center",
      // });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <></>;
}