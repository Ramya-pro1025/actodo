function Header(props)
{
    return(
        <div>
            <h1 className="text-3xl font-medium">Hello, {props.username}!</h1>
            <p>I assist in organizing and streamlining your daily tasks.</p>
        </div>
    )

}
export default Header;