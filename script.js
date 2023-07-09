 // Further code will go here
    // Replace the following two values
    const MoodContractAddress = "0x1a50Cf75A57FF35d3c1995EFb2854842e9b7cE7d";
    // const MoodContractABI = ...;

    // Currently these two are , we will use Ethers to assign them values
    // let MoodContract = ;
    // let signer = ;

    // const MoodContractABI = [{ ...}, { ...}];
    const MoodContractABI = [{
      "inputs": [],
      "name": "getMood",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{
        "internalType": "string",
        "name": "_mood",
        "type": "string"
      }],
      "name": "setMood",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
    ]


    const provider = new ethers.providers.Web3Provider(window.ethereum, "sepolia");


    provider.send("eth_requestAccounts", []).then(() => {
      provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        MoodContract = new ethers.Contract(
          MoodContractAddress,
          MoodContractABI,
          signer
        );
      });
    });



    async function getMood() {
      const mood = await MoodContract.getMood();
      document.getElementById("showMood").innerText = `Your Mood: ${mood}`;
      console.log(mood);

    console.log("mManish")
    }

    async function setMood() {
      const mood = document.getElementById("mood").value;
      await MoodContract.setMood(mood);

    console.log("manish")
    }

