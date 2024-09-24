import Navbar from "@/app/components/Navbar/Navbar";
import ParentComponent from "@/app/components/ParentComponent/ParentComponent";
import Footer from "@/app/components/Footer/Footer";



const Home = () => {
    return(
        <div>
        <Navbar />
        <h1>welcome to home page</h1>
        <ParentComponent />
        <footer />


        </div>
    )
}


export default Home