export default function LandingPage(){
    return(
        <div>
        <div>
            <img src = "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" alt ="food" className="wallpaper"/>
        </div>
        <div className="row">
            <div className="column">
                <div className="center">
                <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmnACGRjcVHqBatmS12H_M2yb5q7b5wF7eg&usqp=CAU"  alt ="order"/>
                <h5>No Minimum order</h5>
                <p>Order in for yourself or for the group, with no restrictions on order value
</p>
</div>
            </div>
            <div className="column">
                <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9eIFBld3boXNA_AoVd2kNVpC3d1WITHXkQ&usqp=CAU"  alt ="order"/>
                <h5>Live tracking</h5>
                <p>Know where your order is at all times, from the restaurant to your doorstep
</p>
            </div>
            <div className="column">
                <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllseOuMjfLz9wE0kQRtV1IdxojsPZKFcxRg&usqp=CAU"  alt ="order"/>
                <h5>Fast Delivery</h5>
                <p>Experience superfast delivery for food delivered fresh & on time
</p>
            </div>
        </div>
        </div>
    );
}