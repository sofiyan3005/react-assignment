import { Grid } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { compareProducts, selectProducts, store } from "../../store";
import Product from "../Product/Product";
import CompareProductsModal from '../CompareProducts/compare-products-modal';
import { ProductFilter } from "../productFilters/product-filters";

export const ProductList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState(null);
    const products = useSelector(selectProducts);
    let compareSelectedProducts = products.filter(product => product.compare);

    const handleOpen = () => {
        setIsModalOpen(true);
    }

    const handleClose = () => {
        setIsModalOpen(false);
        compareSelectedProducts.map((products) => store.dispatch(compareProducts(products)));
    }

    const handleOnFilter = (filter) => {
        setFilters(filter);
    }

    useEffect(() => {
        if (compareSelectedProducts.length >= 2 && !isModalOpen) {
            handleOpen();
        }
    }, [compareSelectedProducts, isModalOpen])
    return (
        <div>
            <Grid>
                <div className="filter-container">
                    <ProductFilter onFilter={handleOnFilter}></ProductFilter>
                </div>
                <Product appliedFilters={filters}/>
            </Grid>
            <Dialog fullWidth={true} maxWidth="md" onClose={handleClose} open={isModalOpen}>
                <DialogTitle>
                    <div className="dialog-header">
                        <span>Compare Products</span>
                        <button className="close-icon" onClick={handleClose}>
                            <CloseIcon />
                        </button>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <CompareProductsModal />
                </DialogContent>
            </Dialog>
        </div>

    )
}