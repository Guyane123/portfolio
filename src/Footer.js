import React from "react";
import "./styles/footer.css";
import CallToAction from "./CallToAction";

const Footer = () => {
    return (
        <div className="Footer" id="footer">
            <CallToAction />
            <css-doodle click-to-update>
                <style>
                    @grid: 1 / 100vw 100vh; background-color:{" "}
                    {document.body.style.backgroundColor}; background-size:
                    200px 200px; background-image: @doodle( @grid: 6 / 100%;
                    @size: 4px; font-size: 4px; color: hsl(@r240, 30%, 50%);
                    box-shadow: @m3x5( calc(4em - @nx * 1em) calc(@ny * 1em)
                    @p(@m3(currentColor), @m2(transparent)), calc(2em + @nx *
                    1em) calc(@ny * 1em) @lp ); );
                </style>
                <div>DJ</div>
            </css-doodle>
        </div>
    );
};

export default Footer;
