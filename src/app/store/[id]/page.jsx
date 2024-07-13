import axios from "axios";
import SingleStoreClientSideComponent from "@/components/StoreClientSideComponents/SingleStoreClientSideComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// SSR RENDERING FOR GETTING STORE DATA
const getStore = async (id) => {
  const res = await axios.get(`http://localhost:4000/api/store/${id}`);
  return res.data;
};

export default async function StorePage({ params }) {
  const { id } = params;
  const storeData = await getStore(id);
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-36 mb-10">
        <SingleStoreClientSideComponent storeData={storeData} />
      </div>
      <Footer />
    </div>
  );
}
