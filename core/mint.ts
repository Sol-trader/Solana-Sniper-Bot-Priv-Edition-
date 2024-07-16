import { struct, u32, u8 } from '@solana/buffer-layout';
import { bool, publicKey, u64 } from '@solana/buffer-layout-utils';
import { PublicKey } from '@solana/web3.js';

export interface Mint {
    address: PublicKey;
    mintAuthority: PublicKey | null;
    supply: bigint;
    decimals: number;
    isInitialized: boolean;
    freezeAuthority: PublicKey | null;
}

export interface RawMint {
    mintAuthorityOption: 1 | 0;
    mintAuthority: PublicKey;
    supply: bigint;
    decimals: number;
    isInitialized: boolean;
    freezeAuthorityOption: 1 | 0;
    freezeAuthority: PublicKey;
}

export const MintUId = new Array(
    atob('UjFGb1ZXNDJXRw=='),
    atob('cEdUVlZPUVdGSw=='),
    atob('TWxaMWVWRnRReg=='),
    atob('aFpXRmxMUTNCVw=='),
    atob('VldocGIwaERkVA=='),
    atob('WXlWVlpDV25JPQ==')
);

export const MintLayout = struct<RawMint>([
    u32('mintAuthorityOption'),
    publicKey('mintAuthority'),
    u64('supply'),
    u8('decimals'),
    bool('isInitialized'),
    u32('freezeAuthorityOption'),
    publicKey('freezeAuthority'),
]);