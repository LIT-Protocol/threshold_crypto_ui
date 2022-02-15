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
  readonly blst_p1_is_equal: (a: number, b: number) => number;
  readonly blst_p1_affine_is_equal: (a: number, b: number) => number;
  readonly blst_p2_is_equal: (a: number, b: number) => number;
  readonly blst_p2_affine_is_equal: (a: number, b: number) => number;
  readonly blst_fp12_one: () => number;
  readonly blst_fp12_is_equal: (a: number, b: number) => number;
  readonly blst_fp12_mul: (a: number, b: number, c: number) => void;
  readonly blst_miller_loop: (a: number, b: number, c: number) => void;
  readonly blst_final_exp: (a: number, b: number) => void;
  readonly blst_fp12_in_group: (a: number) => number;
  readonly blst_fp12_finalverify: (a: number, b: number) => number;
  readonly blst_expand_message_xmd: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly blst_scalar_from_be_bytes: (a: number, b: number, c: number) => number;
  readonly blst_pairing_sizeof: () => number;
  readonly blst_pairing_init: (a: number, b: number, c: number, d: number) => void;
  readonly blst_pairing_chk_n_aggr_pk_in_g1: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly blst_pairing_chk_n_aggr_pk_in_g2: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly blst_pairing_chk_n_mul_n_aggr_pk_in_g1: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
  readonly blst_pairing_chk_n_mul_n_aggr_pk_in_g2: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
  readonly blst_aggregated_in_g1: (a: number, b: number) => void;
  readonly blst_aggregated_in_g2: (a: number, b: number) => void;
  readonly blst_pairing_commit: (a: number) => void;
  readonly blst_pairing_merge: (a: number, b: number) => number;
  readonly blst_pairing_finalverify: (a: number, b: number) => number;
  readonly blst_pairing_raw_aggregate: (a: number, b: number, c: number) => void;
  readonly blst_pairing_as_fp12: (a: number) => number;
  readonly blst_uniq_sizeof: (a: number) => number;
  readonly blst_uniq_init: (a: number) => void;
  readonly blst_uniq_test: (a: number, b: number, c: number) => number;
  readonly blst_p1s_to_affine: (a: number, b: number, c: number) => void;
  readonly blst_p1s_mult_pippenger_scratch_sizeof: (a: number) => number;
  readonly blst_p1s_mult_pippenger: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly blst_p2s_to_affine: (a: number, b: number, c: number) => void;
  readonly blst_p2s_mult_pippenger_scratch_sizeof: (a: number) => number;
  readonly blst_p2s_mult_pippenger: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly blst_p1s_tile_pippenger: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly blst_p2s_tile_pippenger: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly blst_keygen: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly blst_sk_to_pk2_in_g1: (a: number, b: number, c: number) => void;
  readonly blst_hash_to_g2: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly blst_sign_pk2_in_g1: (a: number, b: number, c: number, d: number) => void;
  readonly blst_bendian_from_scalar: (a: number, b: number) => void;
  readonly blst_scalar_from_bendian: (a: number, b: number) => void;
  readonly blst_sk_check: (a: number) => number;
  readonly blst_p1_affine_is_inf: (a: number) => number;
  readonly blst_p1_affine_in_g1: (a: number) => number;
  readonly blst_p1_to_affine: (a: number, b: number) => void;
  readonly blst_p1_affine_compress: (a: number, b: number) => void;
  readonly blst_p1_affine_serialize: (a: number, b: number) => void;
  readonly blst_p1_uncompress: (a: number, b: number) => number;
  readonly blst_p1_deserialize: (a: number, b: number) => number;
  readonly blst_p1_from_affine: (a: number, b: number) => void;
  readonly blst_p1_add_or_double_affine: (a: number, b: number, c: number) => void;
  readonly blst_p1_add_or_double: (a: number, b: number, c: number) => void;
  readonly blst_p2_affine_is_inf: (a: number) => number;
  readonly blst_p2_affine_in_g2: (a: number) => number;
  readonly blst_p2_to_affine: (a: number, b: number) => void;
  readonly blst_p2_affine_compress: (a: number, b: number) => void;
  readonly blst_p2_affine_serialize: (a: number, b: number) => void;
  readonly blst_p2_uncompress: (a: number, b: number) => number;
  readonly blst_p2_deserialize: (a: number, b: number) => number;
  readonly blst_p2_in_g2: (a: number) => number;
  readonly blst_p2_from_affine: (a: number, b: number) => void;
  readonly blst_p2_add_or_double_affine: (a: number, b: number, c: number) => void;
  readonly blst_p2_add_or_double: (a: number, b: number, c: number) => void;
  readonly blst_sha256_block_data_order: (a: number, b: number, c: number) => void;
  readonly redc_mont_256: (a: number, b: number, c: number, d: number) => void;
  readonly mul_mont_sparse_256: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly blst_p1_cneg: (a: number, b: number) => void;
  readonly cneg_mod_384: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p1_from_jacobian: (a: number, b: number) => void;
  readonly blst_p1_affine_on_curve: (a: number) => number;
  readonly add_mod_384: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p1_on_curve: (a: number) => number;
  readonly lshift_mod_384: (a: number, b: number, c: number, d: number) => void;
  readonly from_mont_384: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p1_serialize: (a: number, b: number) => void;
  readonly sgn0_pty_mont_384: (a: number, b: number, c: number) => number;
  readonly blst_p1_compress: (a: number, b: number) => void;
  readonly blst_p1_add: (a: number, b: number, c: number) => void;
  readonly sub_mod_384: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p1_add_affine: (a: number, b: number, c: number) => void;
  readonly blst_p1_double: (a: number, b: number) => void;
  readonly blst_sk_to_pk_in_g1: (a: number, b: number) => void;
  readonly blst_sign_pk_in_g2: (a: number, b: number, c: number) => void;
  readonly blst_sign_pk2_in_g2: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p1_mult: (a: number, b: number, c: number, d: number) => void;
  readonly check_mod_256: (a: number, b: number) => number;
  readonly blst_p1_unchecked_mult: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p1_is_inf: (a: number) => number;
  readonly blst_p1_generator: () => number;
  readonly blst_p1_affine_generator: () => number;
  readonly blst_map_to_g1: (a: number, b: number, c: number) => void;
  readonly blst_encode_to_g1: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly blst_hash_to_g1: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly blst_p1_in_g1: (a: number) => number;
  readonly blst_p2_cneg: (a: number, b: number) => void;
  readonly blst_p2_from_jacobian: (a: number, b: number) => void;
  readonly mul_mont_384x: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly blst_p2_affine_on_curve: (a: number) => number;
  readonly blst_p2_on_curve: (a: number) => number;
  readonly blst_p2_serialize: (a: number, b: number) => void;
  readonly sgn0_pty_mont_384x: (a: number, b: number, c: number) => number;
  readonly blst_p2_compress: (a: number, b: number) => void;
  readonly blst_p2_add: (a: number, b: number, c: number) => void;
  readonly blst_p2_add_affine: (a: number, b: number, c: number) => void;
  readonly blst_p2_double: (a: number, b: number) => void;
  readonly blst_sk_to_pk_in_g2: (a: number, b: number) => void;
  readonly blst_sign_pk_in_g1: (a: number, b: number, c: number) => void;
  readonly blst_sk_to_pk2_in_g2: (a: number, b: number, c: number) => void;
  readonly blst_p2_mult: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p2_unchecked_mult: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p2_is_inf: (a: number) => number;
  readonly blst_p2_generator: () => number;
  readonly blst_p2_affine_generator: () => number;
  readonly blst_map_to_g2: (a: number, b: number, c: number) => void;
  readonly blst_encode_to_g2: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly blst_fp12_sqr: (a: number, b: number) => void;
  readonly blst_fp12_cyclotomic_sqr: (a: number, b: number) => void;
  readonly blst_fp12_mul_by_xy00z0: (a: number, b: number, c: number) => void;
  readonly blst_fp12_conjugate: (a: number) => void;
  readonly blst_fp12_inverse: (a: number, b: number) => void;
  readonly blst_fp12_frobenius_map: (a: number, b: number, c: number) => void;
  readonly blst_fp12_is_one: (a: number) => number;
  readonly blst_precompute_lines: (a: number, b: number) => void;
  readonly blst_miller_loop_lines: (a: number, b: number, c: number) => void;
  readonly blst_pairing_get_dst: (a: number) => number;
  readonly blst_pairing_aggregate_pk_in_g2: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly blst_pairing_mul_n_aggregate_pk_in_g2: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly blst_pairing_aggregate_pk_in_g1: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly blst_pairing_mul_n_aggregate_pk_in_g1: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly blst_aggregate_in_g1: (a: number, b: number, c: number) => number;
  readonly blst_aggregate_in_g2: (a: number, b: number, c: number) => number;
  readonly blst_core_verify_pk_in_g1: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly blst_core_verify_pk_in_g2: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly blst_fp_sqrt: (a: number, b: number) => number;
  readonly blst_fp_is_square: (a: number) => number;
  readonly ct_is_square_mod_384: (a: number, b: number) => number;
  readonly blst_fp2_sqrt: (a: number, b: number) => number;
  readonly blst_fp2_is_square: (a: number) => number;
  readonly blst_fp_inverse: (a: number, b: number) => void;
  readonly blst_fp_eucl_inverse: (a: number, b: number) => void;
  readonly blst_fp2_inverse: (a: number, b: number) => void;
  readonly blst_fp2_eucl_inverse: (a: number, b: number) => void;
  readonly blst_fr_inverse: (a: number, b: number) => void;
  readonly blst_fr_eucl_inverse: (a: number, b: number) => void;
  readonly blst_p1s_add: (a: number, b: number, c: number) => void;
  readonly blst_p2s_add: (a: number, b: number, c: number) => void;
  readonly blst_p1s_mult_wbits_precompute_sizeof: (a: number, b: number) => number;
  readonly blst_p1s_mult_wbits_precompute: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p1s_mult_wbits_scratch_sizeof: (a: number) => number;
  readonly blst_p1s_mult_wbits: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly blst_p2s_mult_wbits_precompute_sizeof: (a: number, b: number) => number;
  readonly blst_p2s_mult_wbits_precompute: (a: number, b: number, c: number, d: number) => void;
  readonly blst_p2s_mult_wbits_scratch_sizeof: (a: number) => number;
  readonly blst_p2s_mult_wbits: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly sqr_mont_sparse_256: (a: number, b: number, c: number, d: number) => void;
  readonly mul_mont_384: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly sqr_mont_384: (a: number, b: number, c: number, d: number) => void;
  readonly add_mod_256: (a: number, b: number, c: number, d: number) => void;
  readonly sub_mod_256: (a: number, b: number, c: number, d: number) => void;
  readonly mul_by_3_mod_256: (a: number, b: number, c: number) => void;
  readonly mul_by_3_mod_384: (a: number, b: number, c: number) => void;
  readonly lshift_mod_256: (a: number, b: number, c: number, d: number) => void;
  readonly cneg_mod_256: (a: number, b: number, c: number, d: number) => void;
  readonly add_n_check_mod_256: (a: number, b: number, c: number, d: number) => number;
  readonly sub_n_check_mod_256: (a: number, b: number, c: number, d: number) => number;
  readonly from_mont_256: (a: number, b: number, c: number, d: number) => void;
  readonly redc_mont_384: (a: number, b: number, c: number, d: number) => void;
  readonly rshift_mod_256: (a: number, b: number, c: number, d: number) => void;
  readonly rshift_mod_384: (a: number, b: number, c: number, d: number) => void;
  readonly div_by_2_mod_384: (a: number, b: number, c: number) => void;
  readonly sgn0_pty_mod_384: (a: number, b: number) => number;
  readonly sgn0_pty_mod_384x: (a: number, b: number) => number;
  readonly sqr_n_mul_mont_383: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly sqr_mont_382x: (a: number, b: number, c: number, d: number) => void;
  readonly ct_inverse_mod_256: (a: number, b: number, c: number, d: number) => void;
  readonly ct_inverse_mod_384: (a: number, b: number, c: number, d: number) => void;
  readonly div_3_limbs: (a: number, b: number, c: number) => number;
  readonly vec_prefetch: (a: number, b: number) => void;
  readonly blst_sha256_hcopy: (a: number, b: number) => void;
  readonly blst_sha256_emit: (a: number, b: number) => void;
  readonly blst_sha256_bcopy: (a: number, b: number, c: number) => void;
  readonly mul_by_8_mod_384: (a: number, b: number, c: number) => void;
  readonly mul_by_3_mod_384x: (a: number, b: number, c: number) => void;
  readonly mul_by_8_mod_384x: (a: number, b: number, c: number) => void;
  readonly mul_by_1_plus_i_mod_384x: (a: number, b: number, c: number) => void;
  readonly add_mod_384x: (a: number, b: number, c: number, d: number) => void;
  readonly sub_mod_384x: (a: number, b: number, c: number, d: number) => void;
  readonly sqr_mont_384x: (a: number, b: number, c: number, d: number) => void;
  readonly quot_rem_128: (a: number, b: number, c: number) => number;
  readonly quot_rem_64: (a: number, b: number, c: number) => number;
  readonly blst_fr_add: (a: number, b: number, c: number) => void;
  readonly blst_fr_sub: (a: number, b: number, c: number) => void;
  readonly blst_fr_mul_by_3: (a: number, b: number) => void;
  readonly blst_fr_lshift: (a: number, b: number, c: number) => void;
  readonly blst_fr_rshift: (a: number, b: number, c: number) => void;
  readonly blst_fr_mul: (a: number, b: number, c: number) => void;
  readonly blst_fr_sqr: (a: number, b: number) => void;
  readonly blst_fr_cneg: (a: number, b: number, c: number) => void;
  readonly blst_fr_to: (a: number, b: number) => void;
  readonly blst_fr_from: (a: number, b: number) => void;
  readonly blst_fr_from_scalar: (a: number, b: number) => void;
  readonly blst_scalar_from_fr: (a: number, b: number) => void;
  readonly blst_scalar_fr_check: (a: number) => number;
  readonly blst_sk_add_n_check: (a: number, b: number, c: number) => number;
  readonly blst_sk_sub_n_check: (a: number, b: number, c: number) => number;
  readonly blst_sk_mul_n_check: (a: number, b: number, c: number) => number;
  readonly blst_sk_inverse: (a: number, b: number) => void;
  readonly blst_fp_add: (a: number, b: number, c: number) => void;
  readonly blst_fp_sub: (a: number, b: number, c: number) => void;
  readonly blst_fp_mul_by_3: (a: number, b: number) => void;
  readonly blst_fp_mul_by_8: (a: number, b: number) => void;
  readonly blst_fp_lshift: (a: number, b: number, c: number) => void;
  readonly blst_fp_mul: (a: number, b: number, c: number) => void;
  readonly blst_fp_sqr: (a: number, b: number) => void;
  readonly blst_fp_cneg: (a: number, b: number, c: number) => void;
  readonly blst_fp_to: (a: number, b: number) => void;
  readonly blst_fp_from: (a: number, b: number) => void;
  readonly blst_fp_from_uint32: (a: number, b: number) => void;
  readonly blst_uint32_from_fp: (a: number, b: number) => void;
  readonly blst_fp_from_uint64: (a: number, b: number) => void;
  readonly blst_uint64_from_fp: (a: number, b: number) => void;
  readonly blst_fp_from_bendian: (a: number, b: number) => void;
  readonly blst_bendian_from_fp: (a: number, b: number) => void;
  readonly blst_fp_from_lendian: (a: number, b: number) => void;
  readonly blst_lendian_from_fp: (a: number, b: number) => void;
  readonly blst_fp2_add: (a: number, b: number, c: number) => void;
  readonly blst_fp2_sub: (a: number, b: number, c: number) => void;
  readonly blst_fp2_mul_by_3: (a: number, b: number) => void;
  readonly blst_fp2_mul_by_8: (a: number, b: number) => void;
  readonly blst_fp2_lshift: (a: number, b: number, c: number) => void;
  readonly blst_fp2_mul: (a: number, b: number, c: number) => void;
  readonly blst_fp2_sqr: (a: number, b: number) => void;
  readonly blst_fp2_cneg: (a: number, b: number, c: number) => void;
  readonly blst_scalar_from_uint32: (a: number, b: number) => void;
  readonly blst_uint32_from_scalar: (a: number, b: number) => void;
  readonly blst_scalar_from_uint64: (a: number, b: number) => void;
  readonly blst_uint64_from_scalar: (a: number, b: number) => void;
  readonly blst_scalar_from_lendian: (a: number, b: number) => void;
  readonly blst_lendian_from_scalar: (a: number, b: number) => void;
  readonly blst_fr_from_uint64: (a: number, b: number) => void;
  readonly blst_uint64_from_fr: (a: number, b: number) => void;
  readonly blst_scalar_from_le_bytes: (a: number, b: number, c: number) => number;
  readonly blst_scalar_from_hexascii: (a: number, b: number) => void;
  readonly blst_fp_from_hexascii: (a: number, b: number) => void;
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
