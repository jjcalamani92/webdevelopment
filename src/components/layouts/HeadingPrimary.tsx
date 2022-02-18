export const HeadingPrimary = (props:any) => {
    const {titleP, titleS} = props;
    return (
        <h1 className="heading" > {titleP} <span>{titleS}</span> </h1>
    )
}