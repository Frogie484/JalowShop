"use client";

export function ScrollToBottomButton() {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToBottom}
      aria-label="Прокрутить вниз"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-accentDark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    </button>
  );
}
