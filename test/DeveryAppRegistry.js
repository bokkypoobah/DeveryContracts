var appRegistryOutput={"contracts":{"DeveryAppRegistry.sol:DeveryAppRegistry":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"removeAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"register\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"isAdmin\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"admins\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"appAccountsLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"appAccount\",\"type\":\"address\"}],\"name\":\"deRegister\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"appAccounts\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"appAccount\",\"type\":\"address\"}],\"name\":\"get\",\"outputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"entries\",\"outputs\":[{\"name\":\"appAccount\",\"type\":\"address\"},{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"appAccount\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"EntryAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"appAccount\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"EntryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"appAccount\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"EntryRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"AdminAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"AdminRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"606060405260008054600160a060020a033316600160a060020a0319909116179055610df2806100306000396000f3006060604052600436106100cf5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631785f53c81146100d45780631e59c529146100f557806324d7806c14610151578063429b62e514610184578063437fa667146101a35780635b114af6146101c85780635b68e09b146101e7578063704802751461021957806379ba5097146102385780638da5cb5b1461024b578063c2bc2efc1461025e578063d4ee1d9014610304578063f29ee12514610317578063f2fde38b146103d7575b600080fd5b34156100df57600080fd5b6100f3600160a060020a03600435166103f6565b005b341561010057600080fd5b6100f360046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965050509235600160a060020a0316925061049a915050565b341561015c57600080fd5b610170600160a060020a036004351661074e565b604051901515815260200160405180910390f35b341561018f57600080fd5b610170600160a060020a0360043516610788565b34156101ae57600080fd5b6101b661079d565b60405190815260200160405180910390f35b34156101d357600080fd5b6100f3600160a060020a03600435166107a4565b34156101f257600080fd5b6101fd6004356109d8565b604051600160a060020a03909116815260200160405180910390f35b341561022457600080fd5b6100f3600160a060020a0360043516610a00565b341561024357600080fd5b6100f3610ac2565b341561025657600080fd5b6101fd610b43565b341561026957600080fd5b61027d600160a060020a0360043516610b52565b604051600160a060020a038216602082015260408082528190810184818151815260200191508051906020019080838360005b838110156102c85780820151838201526020016102b0565b50505050905090810190601f1680156102f55780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b341561030f57600080fd5b6101fd610c3c565b341561032257600080fd5b610336600160a060020a0360043516610c4b565b604051600160a060020a03808516825282166040820152606060208201818152845460026000196101006001841615020190911604918301829052906080830190859080156103c65780601f1061039b576101008083540402835291602001916103c6565b820191906000526020600020905b8154815290600101906020018083116103a957829003601f168201915b505094505050505060405180910390f35b34156103e257600080fd5b6100f3600160a060020a0360043516610c74565b60005433600160a060020a0390811691161461041157600080fd5b600160a060020a03811660009081526002602052604090205460ff16151561043857600080fd5b600160a060020a03811660009081526002602052604090819020805460ff191690557fa3b62bc36326052d97ea62d63c3d60308ed4c3ea8ac079dd8499f1e9c4f80c0f90829051600160a060020a03909116815260200160405180910390a150565b600160a060020a033381166000908152600360205260409020805490911615156106485760606040519081016040908152600160a060020a03338116808452602080850188905291861683850152600090815260039091522081518154600160a060020a031916600160a060020a039190911617815560208201518160010190805161052a929160200190610cb1565b5060408201516002919091018054600160a060020a031916600160a060020a039092169190911790555060048054600181016105668382610d2f565b5060009182526020909120018054600160a060020a03191633600160a060020a038116919091179091557fbd4b1e6ebb1d0f3623ee07df367c6be770e4572a007d39d5bf75d1712aabb607908484604051600160a060020a0380851682528216604082015260606020820181815290820184818151815260200191508051906020019080838360005b838110156106075780820151838201526020016105ef565b50505050905090810190601f1680156106345780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1610749565b805433600160a060020a0390811691161461066257600080fd5b60018101838051610677929160200190610cb1565b50600281018054600160a060020a031916600160a060020a0384161790557f2adc2e23f81c1497631cec6cef2806081ce1a5efca114f7a49957cc878bb22d2338484604051600160a060020a0380851682528216604082015260606020820181815290820184818151815260200191508051906020019080838360005b8381101561070c5780820151838201526020016106f4565b50505050905090810190601f1680156107395780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a15b505050565b600160a060020a03811660009081526002602052604081205460ff16806107825750600054600160a060020a038381169116145b92915050565b60026020526000908152604090205460ff1681565b6004545b90565b60008033600160a060020a031683600160a060020a031614806107cb57506107cb3361074e565b15156107d657600080fd5b5050600160a060020a0381166000908152600360205260408120905b600454600019018110156108a25782600160a060020a031660048281548110151561081957fe5b600091825260209091200154600160a060020a0316141561089a5760048054600019810190811061084657fe5b60009182526020909120015460048054600160a060020a03909216918390811061086c57fe5b60009182526020909120018054600160a060020a031916600160a060020a03929092169190911790556108a2565b6001016107f2565b6004805460001901906108b59082610d2f565b5060028201547fd8bffd023287ebd58de26a5a62cd87aa3f0ef7a930b36ca50e8cd116f386aa969084906001850190600160a060020a0316604051600160a060020a038085168252821660408201526060602082018181528454600260001961010060018416150201909116049183018290529060808301908590801561097d5780601f106109525761010080835404028352916020019161097d565b820191906000526020600020905b81548152906001019060200180831161096057829003601f168201915b505094505050505060405180910390a1600160a060020a03831660009081526003602052604081208054600160a060020a0319168155906109c16001830182610d53565b506002018054600160a060020a0319169055505050565b60048054829081106109e657fe5b600091825260209091200154600160a060020a0316905081565b60005433600160a060020a03908116911614610a1b57600080fd5b600160a060020a03811660009081526002602052604090205460ff16158015610a525750600054600160a060020a03828116911614155b1515610a5d57600080fd5b600160a060020a03811660009081526002602052604090819020805460ff191660011790557f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e33990829051600160a060020a03909116815260200160405180910390a150565b60015433600160a060020a03908116911614610add57600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36001805460008054600160a060020a0319908116600160a060020a03841617909155169055565b600054600160a060020a031681565b610b5a610d9a565b6000806003600085600160a060020a0316600160a060020a031681526020019081526020016000209050806001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c1c5780601f10610bf157610100808354040283529160200191610c1c565b820191906000526020600020905b815481529060010190602001808311610bff57829003601f168201915b5050506002909301549196600160a060020a039092169550909350505050565b600154600160a060020a031681565b600360205260009081526040902080546002820154600160a060020a0391821692600101911683565b60005433600160a060020a03908116911614610c8f57600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610cf257805160ff1916838001178555610d1f565b82800160010185558215610d1f579182015b82811115610d1f578251825591602001919060010190610d04565b50610d2b929150610dac565b5090565b81548183558181151161074957600083815260209020610749918101908301610dac565b50805460018160011615610100020316600290046000825580601f10610d795750610d97565b601f016020900490600052602060002090810190610d979190610dac565b50565b60206040519081016040526000815290565b6107a191905b80821115610d2b5760008155600101610db25600a165627a7a72305820cc012d637c2d49bf39760d390e93459d84fb87bde1da6681ea34dc9f3cae04710029"},"DeveryCommon.sol:Admined":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"removeAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"isAdmin\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"admins\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"AdminAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"AdminRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"606060405260008054600160a060020a033316600160a060020a031990911617905561046f806100306000396000f30060606040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631785f53c811461009257806324d7806c146100b3578063429b62e5146100e6578063704802751461010557806379ba5097146101245780638da5cb5b14610137578063d4ee1d9014610166578063f2fde38b14610179575b600080fd5b341561009d57600080fd5b6100b1600160a060020a0360043516610198565b005b34156100be57600080fd5b6100d2600160a060020a036004351661023c565b604051901515815260200160405180910390f35b34156100f157600080fd5b6100d2600160a060020a0360043516610276565b341561011057600080fd5b6100b1600160a060020a036004351661028b565b341561012f57600080fd5b6100b161034d565b341561014257600080fd5b61014a6103db565b604051600160a060020a03909116815260200160405180910390f35b341561017157600080fd5b61014a6103ea565b341561018457600080fd5b6100b1600160a060020a03600435166103f9565b60005433600160a060020a039081169116146101b357600080fd5b600160a060020a03811660009081526002602052604090205460ff1615156101da57600080fd5b600160a060020a03811660009081526002602052604090819020805460ff191690557fa3b62bc36326052d97ea62d63c3d60308ed4c3ea8ac079dd8499f1e9c4f80c0f90829051600160a060020a03909116815260200160405180910390a150565b600160a060020a03811660009081526002602052604081205460ff16806102705750600054600160a060020a038381169116145b92915050565b60026020526000908152604090205460ff1681565b60005433600160a060020a039081169116146102a657600080fd5b600160a060020a03811660009081526002602052604090205460ff161580156102dd5750600054600160a060020a03828116911614155b15156102e857600080fd5b600160a060020a03811660009081526002602052604090819020805460ff191660011790557f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e33990829051600160a060020a03909116815260200160405180910390a150565b60015433600160a060020a0390811691161461036857600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a0390811691161461041457600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058205632f2e4366030b15f5fb53b42ba52693093d3c62c3490ff5f57493fd331aa210029"},"DeveryCommon.sol:Owned":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101fe8061003b6000396000f3006060604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba509781146100665780638da5cb5b1461007b578063d4ee1d90146100aa578063f2fde38b146100bd575b600080fd5b341561007157600080fd5b6100796100dc565b005b341561008657600080fd5b61008e61016a565b604051600160a060020a03909116815260200160405180910390f35b34156100b557600080fd5b61008e610179565b34156100c857600080fd5b610079600160a060020a0360043516610188565b60015433600160a060020a039081169116146100f757600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101a357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820377938f726bfac1365dac3d6e133a4d18a0b26fe54e55b2123391a25244d51270029"}},"version":"0.4.18+commit.9cf6e910.Darwin.appleclang"};
