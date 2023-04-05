const ArrowTest = (props) => {
    const {name, children,check} = props;
    return(
        <div>
            {/** 참일때만 출력 */}
            {check && <h3>{name}</h3>}
            <h3>{check ? name : ""}</h3>
            <p>{children}</p>
        </div>
    )
}

export default ArrowTest;