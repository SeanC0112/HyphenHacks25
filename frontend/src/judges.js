import React, {useRef} from "react";

const Judges = React.forwardRef((props, ref) => (
    <div className="judges" ref={ref}></div>
))

export default Judges;