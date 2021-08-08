import React from "react";

export default function Footer(){
    const d = new Date();
    return <footer>
        <p>Copywright © {d.getFullYear()}</p>
    </footer>

     
}