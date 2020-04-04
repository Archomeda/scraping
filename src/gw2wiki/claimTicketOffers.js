import { getWikiSemantic } from './helpers.js'

export default async function claimTicketOffers () {
  const query =
    '[[Has item cost.Has item currency::Black Lion Claim Ticket]]|' +
    '[[Has vendor.Is historical::false]]|' +
    '?Has vendor section=section|' +
    '?Has item cost.Has item value=cost|' +
    '?Has item quantity=quantity|' +
    '?Sells item.Has canonical name=name|' +
    '?Sells item.Has game id=id'

  const results = await getWikiSemantic(query)
  const map = {}
  results.map(x => {
    map[x.name[0]] = x.cost[0]
  })
  return map
}
