import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios, { Axios } from "axios";

export let obj = {
  "name":"",
  "description":"",
  "image":"https://ipfs.io/ipfs/",
  "attributes":[
      {
          "trait_type":"height",
          "value":""
      },
      {
          "trait_type":"color",
          "value":""
      },
      {
          "trait_type":"features",
          "value":""
      },
      {
          "trait_type":"habitat",
          "value":""
      },
      {
          "trait_type":"diet",
          "value":""
      },
      {
          "trait_type":"swimming",
          "value":""
      },
      {
          "trait_type":"flying",
          "value":""
      },
      {
          "trait_type":"surface",
          "value":""
      },
      {
          "trait_type":"attack_power",
          "value":""
      },
      {
          "trait_type":"defense_power",
          "value":""
      }
  ]

}

export function authenticate(connected, router) {
  if (connected) {
    router.replace("/home");
  } else {
  }
}
export function isauthenticate(connected, router) {
  if (connected) {
  } else {
    router.replace("/");
  }
}

export async function fetchUrlMetadata(url) {
  if (url) {
    const uri = "https://ipfs.io/ipfs/";

    const response = await axios
      .get(uri + url.toString().split("/")[2])
      .then((data) => {
        return data.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    return response;
  }
}

export const StyledTableCell = styled(TableCell)(() => ({

  [`&.${tableCellClasses.body}`]: {
    backgroundColor: 'rgba(58, 52, 65, 0.578)',
    color:'azure',
    fontSize: 18,
    fontWeight:600,
    borderRadius:10
  },
}));


export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
  },
}));


export function isAdmin(address,router){
  if(address=='0x15DC364d4b7881E980B41d1720D996ce13529Ece'){
    router.replace('/admin')
  }else{
    router.replace('/')
  }
}