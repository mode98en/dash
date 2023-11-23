import { useEffect, useState } from "react";
import "./App.css";
import Get from "./components/display/Display";
import Add from "./components/add/NewProduct";
import Container from "./components/containter/Container";
import Header from "./components/header/Header";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";


function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [search,setSearch]=useState("")
  const [value, setValue] = useState();
  
  const getProducts = async () => {
    try {
      let resp = await fetch(
        `https://dummyjson.com/products/search?q=${search}&limit=2&skip=${skip}`
      );
      let data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getProducts();
  }, [search, skip]);
  
  const handleInputChange = () => {
    setSearch(value);
    setSkip(0);
  };
  return (
    <>
      <Header />
      <br />
      <Container>
        <div className="search">
          <div className="search-box">
            <button onClick={handleInputChange}>
              <SearchOutlined style={{ paddingLeft: "10px", alignItems:"center",justifyContent:"center" }} />
            </button>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Find Product"
              style={{outline:"none",border:"none" , padding:"8px 30px"}}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(value);
                }
              }}
            />
          </div>
          <Add />
        </div>
        <br />
        <Get products={products} skip={skip} setSkip={setSkip} />
        <br />
      </Container>
    </>
  );
}

export default App;
