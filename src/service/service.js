import axios from "axios";

// http://localhost:8696/facture-match/act

class FactureMatch {
  async getAllAct() {
    return await axios.get("http://localhost:8696/facture-match/act?type=1");
  }
}

const factureMatch = new FactureMatch();

export default factureMatch;
