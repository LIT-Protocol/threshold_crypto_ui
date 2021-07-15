import * as wasm from './threshold_crypto_wasm_bridge_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
* @returns {number}
*/
export function get_rng_values_size() {
    var ret = wasm.get_rng_values_size();
    return ret >>> 0;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_rng_value(i, v) {
    wasm.set_rng_value(i, v);
}

/**
* @param {number} i
* @param {number} v
*/
export function set_sk_byte(i, v) {
    wasm.set_sk_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_sk_byte(i) {
    var ret = wasm.get_sk_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_pk_byte(i, v) {
    wasm.set_pk_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_pk_byte(i) {
    var ret = wasm.get_pk_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_sig_byte(i, v) {
    wasm.set_sig_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_sig_byte(i) {
    var ret = wasm.get_sig_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_msg_byte(i, v) {
    wasm.set_msg_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_msg_byte(i) {
    var ret = wasm.get_msg_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_ct_byte(i, v) {
    wasm.set_ct_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_ct_byte(i) {
    var ret = wasm.get_ct_byte(i);
    return ret;
}

/**
* @returns {number}
*/
export function get_rng_next_count() {
    var ret = wasm.get_rng_next_count();
    return ret >>> 0;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_poly_byte(i, v) {
    wasm.set_poly_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_poly_byte(i) {
    var ret = wasm.get_poly_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_msk_byte(i, v) {
    wasm.set_msk_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_msk_byte(i) {
    var ret = wasm.get_msk_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_mpk_byte(i, v) {
    wasm.set_mpk_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_mpk_byte(i) {
    var ret = wasm.get_mpk_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_mc_byte(i, v) {
    wasm.set_mc_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_mc_byte(i) {
    var ret = wasm.get_mc_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_skshare_byte(i, v) {
    wasm.set_skshare_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_skshare_byte(i) {
    var ret = wasm.get_skshare_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_pkshare_byte(i, v) {
    wasm.set_pkshare_byte(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_pkshare_byte(i) {
    var ret = wasm.get_pkshare_byte(i);
    return ret;
}

/**
* @param {number} i
* @param {number} from_node
* @param {number} to_node
* @param {number} v
*/
export function set_bivar_row_byte(i, from_node, to_node, v) {
    wasm.set_bivar_row_byte(i, from_node, to_node, v);
}

/**
* @param {number} i
* @param {number} from_node
* @param {number} to_node
* @returns {number}
*/
export function get_bivar_row_byte(i, from_node, to_node) {
    var ret = wasm.get_bivar_row_byte(i, from_node, to_node);
    return ret;
}

/**
* @param {number} i
* @param {number} from_node
* @param {number} v
*/
export function set_bivar_commitments_byte(i, from_node, v) {
    wasm.set_bivar_commitments_byte(i, from_node, v);
}

/**
* @param {number} i
* @param {number} from_node
* @returns {number}
*/
export function get_bivar_commitments_byte(i, from_node) {
    var ret = wasm.get_bivar_commitments_byte(i, from_node);
    return ret;
}

/**
* @param {number} i
* @param {number} node_index
* @param {number} v
*/
export function set_bivar_sks_byte(i, node_index, v) {
    wasm.set_bivar_sks_byte(i, node_index, v);
}

/**
* @param {number} i
* @param {number} node_index
* @returns {number}
*/
export function get_bivar_sks_byte(i, node_index) {
    var ret = wasm.get_bivar_sks_byte(i, node_index);
    return ret;
}

/**
* @param {number} i
* @param {number} node_index
* @param {number} v
*/
export function set_bivar_pks_byte(i, node_index, v) {
    wasm.set_bivar_pks_byte(i, node_index, v);
}

/**
* @param {number} i
* @param {number} node_index
* @returns {number}
*/
export function get_bivar_pks_byte(i, node_index) {
    var ret = wasm.get_bivar_pks_byte(i, node_index);
    return ret;
}

/**
* @param {number} i
* @param {number} sig_index
* @param {number} v
*/
export function set_signature_share_byte(i, sig_index, v) {
    wasm.set_signature_share_byte(i, sig_index, v);
}

/**
* @param {number} i
* @param {number} sig_index
* @returns {number}
*/
export function get_signature_share_byte(i, sig_index) {
    var ret = wasm.get_signature_share_byte(i, sig_index);
    return ret;
}

/**
* @param {number} i
* @param {number} v
*/
export function set_share_indexes(i, v) {
    wasm.set_share_indexes(i, v);
}

/**
* @param {number} i
* @returns {number}
*/
export function get_share_indexes(i) {
    var ret = wasm.get_share_indexes(i);
    return ret >>> 0;
}

/**
* @param {number} i
* @param {number} share_index
* @param {number} v
*/
export function set_decryption_shares_byte(i, share_index, v) {
    wasm.set_decryption_shares_byte(i, share_index, v);
}

/**
* @param {number} i
* @param {number} share_index
* @returns {number}
*/
export function get_decryption_shares_byte(i, share_index) {
    var ret = wasm.get_decryption_shares_byte(i, share_index);
    return ret;
}

/**
*/
export function derive_pk_from_sk() {
    wasm.derive_pk_from_sk();
}

/**
* @param {number} msg_size
*/
export function sign_msg(msg_size) {
    wasm.sign_msg(msg_size);
}

/**
* @param {number} msg_size
* @returns {boolean}
*/
export function verify(msg_size) {
    var ret = wasm.verify(msg_size);
    return ret !== 0;
}

/**
* @param {number} msg_size
* @returns {number}
*/
export function encrypt(msg_size) {
    var ret = wasm.encrypt(msg_size);
    return ret >>> 0;
}

/**
* @param {number} ct_size
* @returns {number}
*/
export function decrypt(ct_size) {
    var ret = wasm.decrypt(ct_size);
    return ret >>> 0;
}

/**
* @param {number} threshold
*/
export function generate_poly(threshold) {
    wasm.generate_poly(threshold);
}

/**
* @param {number} poly_size
* @returns {number}
*/
export function get_poly_degree(poly_size) {
    var ret = wasm.get_poly_degree(poly_size);
    return ret >>> 0;
}

/**
* @param {number} mc_size
* @returns {number}
*/
export function get_mc_degree(mc_size) {
    var ret = wasm.get_mc_degree(mc_size);
    return ret >>> 0;
}

/**
* @param {number} poly_size
*/
export function derive_master_key(poly_size) {
    wasm.derive_master_key(poly_size);
}

/**
* @param {number} i
* @param {number} poly_size
*/
export function derive_key_share(i, poly_size) {
    wasm.derive_key_share(i, poly_size);
}

/**
* @param {number} threshold
* @param {number} total_nodes
*/
export function generate_bivars(threshold, total_nodes) {
    wasm.generate_bivars(threshold, total_nodes);
}

/**
* @param {number} total_signatures
* @param {number} commitment_size
*/
export function combine_signature_shares(total_signatures, commitment_size) {
    wasm.combine_signature_shares(total_signatures, commitment_size);
}

/**
* @param {number} share_index
* @param {number} ct_size
* @returns {number}
*/
export function create_decryption_share(share_index, ct_size) {
    var ret = wasm.create_decryption_share(share_index, ct_size);
    return ret >>> 0;
}

/**
* @param {number} total_decryption_shares
* @param {number} commitment_size
* @param {number} ct_size
* @returns {number}
*/
export function combine_decryption_shares(total_decryption_shares, commitment_size, ct_size) {
    var ret = wasm.combine_decryption_shares(total_decryption_shares, commitment_size, ct_size);
    return ret >>> 0;
}

export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

export function __wbindgen_string_new(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export function __wbg_log_9a99fb1af846153b(arg0) {
    console.log(getObject(arg0));
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

