import React, { useState } from "react";
import { emphasize, styled } from "@mui/material";
import { Breadcrumbs, Chip } from "@mui/material";
import { MdHome } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { MdShoppingBag } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import skirt from "../../assets/images/skirt.png";
import Button from '@mui/material/Button';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";

// breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        }
    };
});

const Products = () => {

    const [showBy, setShowBy] = useState('');
    const [catBy, setCatBy] = useState('');

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product List</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<MdHome fontSize="small" />}
                        />
                        <StyledBreadcrumb
                            label="Products"
                            deleteIcon={<MdExpandLess />}
                        />
                    </Breadcrumbs>
                </div>

                <div className="row dashboard-box-wrapper-row dashboard-box-wrapper-row-v2">
                    <div className="col-md-12">
                        <div className="dashboard-box-wrapper d-flex">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeMedium
                                MuiButton-colorPrimary dashboard-box css-1ujsas3" type="button" style={{backgroundImage: 'linear-gradient(to right, rgb(29, 162, 86), rgb(72, 212, 131))'}}
                                >
                                <span className="chart"> <TrendingUpIcon /> </span>
                                <div className="d-flex w-100">
                                    <div className="col1">
                                        <h4 className="text-white mb-0">Total User</h4>
                                        <span className="text-white">277</span>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="icons">
                                            <FaUserCircle />
                                        </span>
                                    </div>
                                </div>
                            </button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeMedium
                                MuiButton-colorPrimary dashboard-box css-1ujsas3" type="button" 
                                style={{backgroundImage: 'linear-gradient(to right, rgb(192, 18, 226), rgb(235, 100, 254))'}}
                                >
                                <span className="chart"> <TrendingDownIcon /> </span>
                                <div className="d-flex w-100">
                                    <div className="col1">
                                        <h4 className="text-white mb-0">Total User</h4>
                                        <span className="text-white">277</span>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="icons">
                                            <IoMdCart />
                                        </span>
                                    </div>
                                </div>
                            </button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeMedium
                                MuiButton-colorPrimary dashboard-box css-1ujsas3" type="button" 
                                style={{backgroundImage: 'linear-gradient(to right, rgb(44, 120, 229), rgb(96, 175, 245))'}}
                                >
                                <span className="chart"> <TrendingDownIcon /> </span>
                                <div className="d-flex w-100">
                                    <div className="col1">
                                        <h4 className="text-white mb-0">Total User</h4>
                                        <span className="text-white">277</span>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="icons">
                                            <MdShoppingBag />
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="headign-text">Best selling Products</h3>
                    <div className="row card-filters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl className="w-100" size="small">
                            <Select
                                value={showBy}
                                onChange={(e)=> setShowBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                labelId="demo-select-small-label"
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl className="w-100" size="small">
                            <Select
                                value={catBy}
                                onChange={(e)=> setCatBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Rating</th>
                                    <th>Order</th>
                                    <th>Sales</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td> 
                                        <div className="d-flex align-items-center product-box">
                                            <div className="img-wrapper">
                                                <div className="img">
                                                    <img src={skirt} alt="skirt" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Topa and skirt set for Female...</h6>
                                                <p>Woman's exclusive summer Tops and skirt set 
                                                for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td> 
                                        <del className="old-price">$21.00</del>
                                        <span className="new-price text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td> 
                                        <div className="d-flex align-items-center product-box">
                                            <div className="img-wrapper">
                                                <div className="img">
                                                    <img src={skirt} alt="skirt" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Topa and skirt set for Female...</h6>
                                                <p>Woman's exclusive summer Tops and skirt set 
                                                for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td> 
                                        <del className="old-price">$21.00</del>
                                        <span className="new-price text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td> 
                                        <div className="d-flex align-items-center product-box">
                                            <div className="img-wrapper">
                                                <div className="img">
                                                    <img src={skirt} alt="skirt" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Topa and skirt set for Female...</h6>
                                                <p>Woman's exclusive summer Tops and skirt set 
                                                for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td> 
                                        <del className="old-price">$21.00</del>
                                        <span className="new-price text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td> 
                                        <div className="d-flex align-items-center product-box">
                                            <div className="img-wrapper">
                                                <div className="img">
                                                    <img src={skirt} alt="skirt" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Topa and skirt set for Female...</h6>
                                                <p>Woman's exclusive summer Tops and skirt set 
                                                for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td> 
                                        <del className="old-price">$21.00</del>
                                        <span className="new-price text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td> 
                                        <div className="d-flex align-items-center product-box">
                                            <div className="img-wrapper">
                                                <div className="img">
                                                    <img src={skirt} alt="skirt" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Topa and skirt set for Female...</h6>
                                                <p>Woman's exclusive summer Tops and skirt set 
                                                for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td> 
                                        <del className="old-price">$21.00</del>
                                        <span className="new-price text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td> 
                                        <div className="d-flex align-items-center product-box">
                                            <div className="img-wrapper">
                                                <div className="img">
                                                    <img src={skirt} alt="skirt" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Topa and skirt set for Female...</h6>
                                                <p>Woman's exclusive summer Tops and skirt set 
                                                for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td> 
                                        <del className="old-price">$21.00</del>
                                        <span className="new-price text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td> 
                                        <div className="d-flex align-items-center product-box">
                                            <div className="img-wrapper">
                                                <div className="img">
                                                    <img src={skirt} alt="skirt" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Topa and skirt set for Female...</h6>
                                                <p>Woman's exclusive summer Tops and skirt set 
                                                for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td> 
                                        <del className="old-price">$21.00</del>
                                        <span className="new-price text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td> 
                                        <div className="d-flex align-items-center product-box">
                                            <div className="img-wrapper">
                                                <div className="img">
                                                    <img src={skirt} alt="skirt" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Topa and skirt set for Female...</h6>
                                                <p>Woman's exclusive summer Tops and skirt set 
                                                for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td> 
                                        <del className="old-price">$21.00</del>
                                        <span className="new-price text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex table-footer">
                            <p>showing <b>12</b>  of <b>60</b>  results</p>
                            <Pagination count={10} color="primary" className="paginations" showFirstButton showLastButton />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Products;

