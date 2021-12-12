import { motion } from "framer-motion";
const Product = () => {
  return (
    <motion.div initial className="flex items-center justify-center h-screen">
      <motion.img
        animate={{ scale: 1 }}
        layoutId="riiski"
        src="/project1.png"
        alt="Detail of zipper pull with tan leather and silver rivet."
        className="object-cover object-center w-full h-full py-56 transition duration-150 opacity-75 group-hover:scale-95"
      />
    </motion.div>
  );
};

export default Product;
