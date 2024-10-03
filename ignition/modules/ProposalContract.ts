import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const ProposalModule = buildModule("ProposalContractModule", (m) => {
  const proposal = m.contract("ProposalContract", []);
  return { proposal };
});

export default ProposalModule;