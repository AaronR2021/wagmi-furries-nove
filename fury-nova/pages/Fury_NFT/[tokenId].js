import { useRouter } from "next/router";

function CharacterDetail() {
    const router = useRouter();
    const tokenId = router.query.tokenId
  return (
    <div>The token Id is  {tokenId}</div>
  )
}

export default CharacterDetail