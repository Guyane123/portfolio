const GoUp = () => {
    function handleClick(e) {
        window.scrollTo(0, 0, 200);
        // document.body.animate({ scrollTop: 0 }, 500);
    }

    return (
        <div>
            <button onClick={() => handleClick()} id="btn" className="goUp">
                ↑ To Top
            </button>
        </div>
    );
};

export default GoUp;
