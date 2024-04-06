type TokenType = 'tile' | 'card' | 'mixed';

interface TokenDefinition {
  type: TokenType
  value: string;
}

type Token = string;

export type { Token, TokenDefinition, TokenType };