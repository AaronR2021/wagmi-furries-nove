import styles from "./form.module.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { obj } from "../utils/utils";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import axios from "axios";

function form() {
  const [ipfs, setipfs] = useState(obj);
  const [step, setStep] = useState(0);
  const apiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
  const apiSecret = process.env.NEXT_PUBLIC_PINATA_API_KEY;

  //functions
  function setObject(e) {
    const key = e.target.name;
    const value = e.target.value;
    if (key in ipfs) {
      ipfs[key] = value;
    }
    if (key === "name") {
      ipfs.name = value;
    } else if (key === "description") {
      ipfs.description = value;
    } else if (key === "height") {
      ipfs.attributes[0].value = value;
    } else if (key === "color") {
      ipfs.attributes[1].value = value;
    } else if (key === "features") {
      ipfs.attributes[2].value = value;
    } else if (key === "habitat") {
      ipfs.attributes[3].value = value;
    } else if (key === "diet") {
      ipfs.attributes[4].value = value;
    } else if (key === "swimming") {
      ipfs.attributes[5].value = value;
    } else if (key === "flying") {
      ipfs.attributes[6].value = value;
    } else if (key === "surface") {
      ipfs.attributes[7].value = value;
    } else if (key === "attack_power") {
      ipfs.attributes[8].value = value;
    } else if (key === "defense_power") {
      ipfs.attributes[9].value = value;
    }
  }
  function returnData() {
    console.log(ipfs);
  }
  async function imageUpload(event) {
    setStep(1)
  }

  if (step == 0) {
    return (
      <div className={styles.formCenter}>
        <h4 className={styles.uploadImageText}>
          Upload Image of spotten Furry
        </h4>


        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input accept="image/*" type="file"  onChange={imageUpload}/>
          </IconButton>
        </Stack>


      </div>
    );
  } else {
    return (
      <div className={styles.formCenter}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={styles.form}
        >
          {console.log(ipfs, ">>>IPFS")}

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Please enter Furry nova's name"
            onChange={setObject}
            name="name"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Please enter Furry nova's Description"
            onChange={setObject}
            name="description"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Height in Ft."
            onChange={setObject}
            name="height"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Colour"
            onChange={setObject}
            name="color"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Features"
            onChange={setObject}
            name="features"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Habitat"
            onChange={setObject}
            name="habitat"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Diet"
            onChange={setObject}
            name="diet"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Swimming (true/false)"
            onChange={setObject}
            name="swimming"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Flying (true/false)"
            onChange={setObject}
            name="flying"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Surface (true/false)"
            onChange={setObject}
            name="surface"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Attack_power"
            onChange={setObject}
            name="attack_power"
          />

          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Defense_power"
            onChange={setObject}
            name="defense_power"
          />
        </Box>

        <button onClick={returnData}>Click</button>
      </div>
    );
  }
}

export default form;
