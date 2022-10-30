import React from "react";
import Counter from "../components/counter/counter.jsx"
import DateTime from "../components/dateTime/datetime.jsx"
import TotalCount from "../components/totalCount/totalCount.jsx"
import pagedata from "../data/data.json"

export default function Shops() {
    return (
    <div>
        <TotalCount data={pagedata.wholeSumData} />
        <DateTime />
        <Counter data={pagedata.counterData} />
    </div>)
}