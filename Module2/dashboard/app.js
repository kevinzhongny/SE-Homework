class App extends React.Component {
    render() {
        return (
            <div id='container'>
                <div id='sidebar'>
                    <div id='sidebartext'>
                        Dashboard <br></br>
                        Widget <br></br>
                        Reviews <br></br>
                        Customers <br></br>
                        Online Analysis <br></br>
                        Settings
                    </div>
                </div>
                <div id='reviews'>
                    Reviews <br></br>
                    <p id='numCount'>500</p>
                </div>
                <div id='rating'>
                    Average Rating <br></br>
                    <p id='numCount'>3.45</p>
                </div>
                <div id='analysis'>
                    Sentiment Analysis
                    <p id='sentAnalysis'>
                        750 <br></br>
                        675 <br></br>
                        525 <br></br>
                    </p>
                </div>
                <div id='visitors'>
                    Website Visitors
                    <p id='numCount'>127</p>
                    <div id='visitorGraph'></div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('main')
)