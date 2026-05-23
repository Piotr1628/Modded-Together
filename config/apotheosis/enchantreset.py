import re

def process_enchantments_cfg(input_file="enchantments.cfg", dry_run=False):
    with open(input_file, 'r') as f:
        content = f.read()
    
    enchant_pattern = r'("[\w]+:[\w]+")\s*\{([^}]*)\}'
    changes = []
    
    def replace_max_level(match):
        enchant_name = match.group(1)
        block_content = match.group(2)
        
        # Look for original level in comments
        patterns = [
            (r'originally\s+(\d+)', 'originally'),
            (r'Default:\s*(\d+)', 'Default'),
            (r'originally\s*-\s*(\d+)', 'originally'),
        ]
        
        original_level = None
        for pattern, source in patterns:
            match_orig = re.search(pattern, block_content, re.IGNORECASE)
            if match_orig:
                original_level = match_orig.group(1)
                break
        
        # Find current Max Level
        current_level_match = re.search(r'I:"Max Level"=(\d+)', block_content)
        current_level = current_level_match.group(1) if current_level_match else None
        
        if original_level and current_level and current_level != original_level:
            changes.append({
                'enchant': enchant_name.strip('"'),
                'old': current_level,
                'new': original_level
            })
            
            # Replace the Max Level
            new_block = re.sub(
                r'I:"Max Level"=\d+',
                f'I:"Max Level"={original_level}',
                block_content
            )
            return f'{enchant_name} {{{new_block}}}'
        
        return f'{enchant_name} {{{block_content}}}'
    
    result = re.sub(enchant_pattern, replace_max_level, content, flags=re.DOTALL)
    
    # Print changes
    if changes:
        print(f"\n📄 {input_file}")
        print("-" * 60)
        for change in changes:
            print(f"  {change['enchant']}: {change['old']} → {change['new']}")
        print(f"\n  Total: {len(changes)} enchantments changed")
        
        if not dry_run:
            with open(input_file, 'w') as f:
                f.write(result)
            print(f"\n✓ Saved changes to {input_file}")
        else:
            print(f"\nℹ DRY RUN - No changes written")
    else:
        print(f"✓ No changes needed in {input_file}")
    
    return changes

if __name__ == "__main__":
    import sys
    
    # Check for dry run flag
    dry_run = '--dry-run' in sys.argv or '-n' in sys.argv
    
    # Check for custom filename
    filename = "enchantments.cfg"
    for arg in sys.argv[1:]:
        if arg not in ['--dry-run', '-n']:
            filename = arg
            break
    
    process_enchantments_cfg(filename, dry_run)