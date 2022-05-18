import React from "react";
import News from "./News";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
    var pageSize=12
    var country="in"
    return (
        <>
     <div>
     <BrowserRouter>
            <NavBar />
             <Routes>
 <Route path="/" element={<News pageSize={pageSize} country={country} category="general" />} />
 <Route path="/sports" element={<News pageSize={pageSize} country={country} category="sports" />} />
<Route path="/technology" element={<News pageSize={pageSize} country={country} category="technology" />} />
<Route path="/science" element={<News pageSize={pageSize} country={country} category="science" />} />
 <Route path="/business" element={<News pageSize={pageSize} country={country} category="business" />} />
<Route path="/health" element={<News pageSize={pageSize} country={country} category="health" />} />
 <Route path="/entertainment" element={<News pageSize={pageSize} country={country} category="entertainment" />} />
 </Routes>
</BrowserRouter>
            </div>
        </>
    )
}