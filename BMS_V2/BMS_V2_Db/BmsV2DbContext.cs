﻿using BMS_V2_Db.Models;
using Microsoft.EntityFrameworkCore;

namespace BMS_V2_Db;
public class BmsV2DbContext : DbContext
{
    /// <summary>
    /// 用户
    /// </summary>
    public DbSet<User> User { get; set; } = null!;
    /// <summary>
    /// 客户信息
    /// </summary>
    public DbSet<UserCustomer> UserCustomer { get; set; } = null!;
    /// <summary>
    /// 工程师
    /// </summary>
    public DbSet<UserEngineer> UserEngineer { get; set; } = null!;
    /// <summary>
    /// Pcb订单
    /// </summary>
    public DbSet<PcbOrder> PcbOrder { get; set; } = null!;

    public BmsV2DbContext(DbContextOptions<BmsV2DbContext> options) : base(options) { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(this.GetType().Assembly);
        base.OnModelCreating(modelBuilder);

    }
}
