/* tslint:disable */
/* eslint-disable */
/**
* @returns {number}
*/
export function get_rng_values_size(): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_rng_value(i: number, v: number): void;
/**
* @param {number} i
* @param {number} v
*/
export function set_sk_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_sk_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_pk_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_pk_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_sig_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_sig_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_msg_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_msg_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_ct_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_ct_byte(i: number): number;
/**
* @returns {number}
*/
export function get_rng_next_count(): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_poly_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_poly_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_msk_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_msk_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_mpk_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_mpk_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_mc_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_mc_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_skshare_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_skshare_byte(i: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_pkshare_byte(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_pkshare_byte(i: number): number;
/**
* @param {number} i
* @param {number} from_node
* @param {number} to_node
* @param {number} v
*/
export function set_bivar_row_byte(i: number, from_node: number, to_node: number, v: number): void;
/**
* @param {number} i
* @param {number} from_node
* @param {number} to_node
* @returns {number}
*/
export function get_bivar_row_byte(i: number, from_node: number, to_node: number): number;
/**
* @param {number} i
* @param {number} from_node
* @param {number} v
*/
export function set_bivar_commitments_byte(i: number, from_node: number, v: number): void;
/**
* @param {number} i
* @param {number} from_node
* @returns {number}
*/
export function get_bivar_commitments_byte(i: number, from_node: number): number;
/**
* @param {number} i
* @param {number} node_index
* @param {number} v
*/
export function set_bivar_sks_byte(i: number, node_index: number, v: number): void;
/**
* @param {number} i
* @param {number} node_index
* @returns {number}
*/
export function get_bivar_sks_byte(i: number, node_index: number): number;
/**
* @param {number} i
* @param {number} node_index
* @param {number} v
*/
export function set_bivar_pks_byte(i: number, node_index: number, v: number): void;
/**
* @param {number} i
* @param {number} node_index
* @returns {number}
*/
export function get_bivar_pks_byte(i: number, node_index: number): number;
/**
* @param {number} i
* @param {number} sig_index
* @param {number} v
*/
export function set_signature_share_byte(i: number, sig_index: number, v: number): void;
/**
* @param {number} i
* @param {number} sig_index
* @returns {number}
*/
export function get_signature_share_byte(i: number, sig_index: number): number;
/**
* @param {number} i
* @param {number} v
*/
export function set_share_indexes(i: number, v: number): void;
/**
* @param {number} i
* @returns {number}
*/
export function get_share_indexes(i: number): number;
/**
* @param {number} i
* @param {number} share_index
* @param {number} v
*/
export function set_decryption_shares_byte(i: number, share_index: number, v: number): void;
/**
* @param {number} i
* @param {number} share_index
* @returns {number}
*/
export function get_decryption_shares_byte(i: number, share_index: number): number;
/**
*/
export function derive_pk_from_sk(): void;
/**
* @param {number} msg_size
*/
export function sign_msg(msg_size: number): void;
/**
* @param {number} msg_size
* @returns {boolean}
*/
export function verify(msg_size: number): boolean;
/**
* @param {number} msg_size
* @returns {number}
*/
export function encrypt(msg_size: number): number;
/**
* @param {number} ct_size
* @returns {number}
*/
export function decrypt(ct_size: number): number;
/**
* @param {number} threshold
*/
export function generate_poly(threshold: number): void;
/**
* @param {number} poly_size
* @returns {number}
*/
export function get_poly_degree(poly_size: number): number;
/**
* @param {number} mc_size
* @returns {number}
*/
export function get_mc_degree(mc_size: number): number;
/**
* @param {number} poly_size
*/
export function derive_master_key(poly_size: number): void;
/**
* @param {number} i
* @param {number} poly_size
*/
export function derive_key_share(i: number, poly_size: number): void;
/**
* @param {number} threshold
* @param {number} total_nodes
*/
export function generate_bivars(threshold: number, total_nodes: number): void;
/**
* @param {number} total_signatures
* @param {number} commitment_size
*/
export function combine_signature_shares(total_signatures: number, commitment_size: number): void;
/**
* @param {number} share_index
* @param {number} ct_size
* @returns {number}
*/
export function create_decryption_share(share_index: number, ct_size: number): number;
/**
* @param {number} total_decryption_shares
* @param {number} commitment_size
* @param {number} ct_size
* @returns {number}
*/
export function combine_decryption_shares(total_decryption_shares: number, commitment_size: number, ct_size: number): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly get_rng_values_size: () => number;
  readonly set_rng_value: (a: number, b: number) => void;
  readonly set_sk_byte: (a: number, b: number) => void;
  readonly get_sk_byte: (a: number) => number;
  readonly set_pk_byte: (a: number, b: number) => void;
  readonly get_pk_byte: (a: number) => number;
  readonly set_sig_byte: (a: number, b: number) => void;
  readonly get_sig_byte: (a: number) => number;
  readonly set_msg_byte: (a: number, b: number) => void;
  readonly get_msg_byte: (a: number) => number;
  readonly set_ct_byte: (a: number, b: number) => void;
  readonly get_ct_byte: (a: number) => number;
  readonly get_rng_next_count: () => number;
  readonly set_poly_byte: (a: number, b: number) => void;
  readonly get_poly_byte: (a: number) => number;
  readonly set_msk_byte: (a: number, b: number) => void;
  readonly get_msk_byte: (a: number) => number;
  readonly set_mpk_byte: (a: number, b: number) => void;
  readonly get_mpk_byte: (a: number) => number;
  readonly set_mc_byte: (a: number, b: number) => void;
  readonly get_mc_byte: (a: number) => number;
  readonly set_skshare_byte: (a: number, b: number) => void;
  readonly get_skshare_byte: (a: number) => number;
  readonly set_pkshare_byte: (a: number, b: number) => void;
  readonly get_pkshare_byte: (a: number) => number;
  readonly set_bivar_row_byte: (a: number, b: number, c: number, d: number) => void;
  readonly get_bivar_row_byte: (a: number, b: number, c: number) => number;
  readonly set_bivar_commitments_byte: (a: number, b: number, c: number) => void;
  readonly get_bivar_commitments_byte: (a: number, b: number) => number;
  readonly set_bivar_sks_byte: (a: number, b: number, c: number) => void;
  readonly get_bivar_sks_byte: (a: number, b: number) => number;
  readonly set_bivar_pks_byte: (a: number, b: number, c: number) => void;
  readonly get_bivar_pks_byte: (a: number, b: number) => number;
  readonly set_signature_share_byte: (a: number, b: number, c: number) => void;
  readonly get_signature_share_byte: (a: number, b: number) => number;
  readonly set_share_indexes: (a: number, b: number) => void;
  readonly get_share_indexes: (a: number) => number;
  readonly set_decryption_shares_byte: (a: number, b: number, c: number) => void;
  readonly get_decryption_shares_byte: (a: number, b: number) => number;
  readonly derive_pk_from_sk: () => void;
  readonly sign_msg: (a: number) => void;
  readonly verify: (a: number) => number;
  readonly encrypt: (a: number) => number;
  readonly decrypt: (a: number) => number;
  readonly generate_poly: (a: number) => void;
  readonly get_poly_degree: (a: number) => number;
  readonly get_mc_degree: (a: number) => number;
  readonly derive_master_key: (a: number) => void;
  readonly derive_key_share: (a: number, b: number) => void;
  readonly generate_bivars: (a: number, b: number) => void;
  readonly combine_signature_shares: (a: number, b: number) => void;
  readonly create_decryption_share: (a: number, b: number) => number;
  readonly combine_decryption_shares: (a: number, b: number, c: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
